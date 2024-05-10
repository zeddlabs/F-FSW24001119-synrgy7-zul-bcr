import db from "../configs/database.conf";
import ISize from "../types/size.type";

const getAllSizes = async (): Promise<ISize[]> => {
  const data: ISize[] = await db<ISize>('sizes');
  return data;
}

const getSizeById = async (id: number): Promise<ISize> => {
  const [data]: ISize[] = await db<ISize>('sizes').where({ id });
  return data;
}

const storeSize = async (size: ISize): Promise<ISize> => {
  const [data]: ISize[] = await db<ISize>('sizes').insert(size).returning('*');
  return data;
}

const updateSize = async (id: number, size: ISize): Promise<ISize> => {
  const [data]: ISize[] = await db<ISize>('sizes').where({ id }).update(size).returning('*');
  return data;
}

const deleteSize = async (id: number): Promise<ISize> => {
  const [data]: ISize[] = await db<ISize>('sizes').where({ id }).del().returning('*');
  return data;
}

export {
  getAllSizes,
  getSizeById,
  storeSize,
  updateSize,
  deleteSize
}