import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entity/user.entity";

//  repository는 DB의 CR
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{ }