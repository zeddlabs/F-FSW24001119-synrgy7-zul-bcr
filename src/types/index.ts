import { Knex } from "knex"
import ICar from "./car.type";
import ISize from "./size.type";

declare module 'knex/types/tables' {
  interface Tables {
    cars: ICar;
    cars_composite: Knex.CompositeTableType<
      ICar,
      Pick<ICar, 'name'> & Partial<Pick<ICar, 'created_at' | 'updated_at'>>,
      Partial<Omit<ICar, 'id'>>
    >;

    sizes: ISize;
    sizes_composite: Knex.CompositeTableType<
      ISize,
      Pick<ISize, 'name'> & Partial<Pick<ISize, 'created_at' | 'updated_at'>>,
      Partial<Omit<ISize, 'id'>>
    >;
  }
}