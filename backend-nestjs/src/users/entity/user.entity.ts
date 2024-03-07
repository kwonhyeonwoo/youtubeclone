import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryColumn()
    id: number;

    // @Column({ nullable: true })
    // avatar?: string;

    @Column()
    name?: string

    @Column()
    nickName?: string;

    @Column()
    email?: string;

    @Column()
    password?: string;

    // 업로드 한 videos도 연결해줘야함
}