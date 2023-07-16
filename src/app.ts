import express, { Express } from "express"
import routes from './routes/router';

import { Request, Response } from "express"
import { sequelize } from "./connection"
import { DataTypes, Model,Sequelize } from "sequelize";
import AuthRouter from "./routes/router";


const app: Express = express();



app.use(express.json())
app.use('/auth', AuthRouter);





class Follower extends Model {
    public id!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  


class Sign extends Model {
    public id!: number;
    public name!: string;
    static password: string;
    public description!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  
    
  }


Sign.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
          },
        },
    
    {
        sequelize,
        tableName: 'users',
    }
);

export default Sign;

Sign.belongsToMany(Sign, { through: 'Followers', as: 'followers', foreignKey: 'userId', otherKey: 'followerId' });


// Define API routes
app.get('/fetchAllUsers', async (req: Request, res: Response) => {
    try {
        const signs = await Sign.findAll();
        console.log('Response -> \n\n',signs);
        res.json(signs);
    } catch (error) {
        console.error('error ===============> \n',error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/register', async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const sign = await Sign.create({ email, password });
        res.status(201).json(sign);
    } catch (error) {
        console.log('error-------',error)
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/follower',async(req:Request,res:Response)=>{
    try{
        const {email,password}=req.body;
        const user=await Sign.findOne({where:{email,password}});
       if(!user){
        return res.status(404).json({error:'User not found'})
       }
       res.status(200).json({message:'follower added successfully'})
       /*const followers = await user.getFollowers();
       const followersCount=followers.length;
    res.status(200).json({ followersCount });*/
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }

   
   
});

app.delete('/follower', async (req, res) => {
    try {
      const { email, password, followerId } = req.body;
      const user = await Sign.findOne({ where: { email, password } });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      const follower = await Sign.findByPk(followerId);
      if (!follower) {
        return res.status(404).json({ error: 'Follower not found' });
      }
  
      await user.$remove('follower', follower);
  
      res.status(200).json({ message: 'Follower removed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  app.get('/users/:userId/followers', async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;
      const { page, limit } = req.query;
  
      const user = await Sign.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const offset = (Number(page) - 1) * Number(limit);
  
      const followers = await user.getFollowers({
        offset,
        limit: Number(limit),
      });
  
      res.json(followers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  
  


app.listen(3000, () => {
    console.log("server is running at 3000")
})







