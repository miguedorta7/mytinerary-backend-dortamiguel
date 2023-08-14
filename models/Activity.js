import {model,Schema,Types} from "mongoose";

let colecction= 'activities';
let schema = new Schema ({
    name: {Type: String, required: true},
    photo:{Type: String, required: true},
    itinerary_id: {type:Types.ObjectId, required: true}
});

let Activity = model(colecction,schema);

export default Activity;