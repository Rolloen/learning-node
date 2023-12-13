import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserModel } from "../../models/users";

@Entity()
export class User implements UserModel {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        length: 100
    })
    username!: string;

    @Column("text")
    email!: string;

    @Column({
        length: 1000
    })
    hashedPwd! : string

    @Column("date")
    createdDate! : Date

    // constructor(payload : UserModel) {
    //     this.username = payload.username;
    //     this.email = payload.email;
    //     this.createdDate = new Date();
    // }

}