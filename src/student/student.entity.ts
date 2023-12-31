import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  _id: string;
  @ObjectIdColumn()

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  lastName: string;
}
