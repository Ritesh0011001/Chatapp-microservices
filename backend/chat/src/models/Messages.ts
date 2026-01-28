import mongoose, {Document,Schema,Types} from "mongoose";

export interface IMessage extends Document {
  chatId:Types.ObjectId;
  sender:string;
  text?:string;
  image?:{
    url:string;
    publicId:string;
  };
  messageType : "text" | "image";
  seen:Boolean;
  seenAt?:Date;
  updatedAt:Date;
  createdAt:Date;
}

const schema = new Schema<IMessage>(
  {
    chatId:{
      type:Schema.Types.ObjectId,
      ref:"chat",
      required:true
    },
    sender:{
      type:String,
      required:true
    },
    text:String,
    image:{
      url:String,
      publicId:String
    },
    messageType:{
      type:String,
      enum:["text","image"],
      default:"text"
    },
    seen:{
      type:Boolean,
      default:false
    },
    seenAt:{
      type:Date,
      default:null
    }
  },{
    timestamps:true
  }
)

export const Messages = mongoose.model<IMessage>("Messages",schema)