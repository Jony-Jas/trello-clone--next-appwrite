import {ID,storage} from "@/appwrite";

const uploadImage = async (file:File)=>{
    if(!file) return;

    const fileUploaded = await storage.createFile(
        "64841869b252018b895a",
        ID.unique(),
        file
    );
    return fileUploaded;
}

export default uploadImage;