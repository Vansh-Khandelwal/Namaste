import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    IsAdmin: {
        type: Boolean,
        default: false
    },
    ProfileImg: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    CoverImg: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    About: String,
    Relationship_Status: String,
    Country: String,
    LivesIn: String,
    WorksAt: String,
    Followers: [],
    Following: [],
}, { timestamps: true })

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;