import Realm from "realm";
import { MusicSchema } from "./schemas/MusicSchema";

export const getRealm = async () => {

    const app = new Realm.App({
        id: "applicationtest-fbdyy",
      });
    
    const credentials = Realm.Credentials.anonymous();
    
    const user = await app.logIn(credentials);

    return await Realm.open({
        path: "realm/baraokeskinaDB",
        schema: [MusicSchema],  
        sync: {user, flexible: true}
    });
}
