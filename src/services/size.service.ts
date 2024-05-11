import db from "../configs/database.conf";
import SizeDto from "../dtos/size.dto";
import Size from "../models/size.model";

const getAllSizes = async (): Promise<Size[]> => {
  const data: Size[] = await db<Size>('sizes');
  return data;
}

const getSizeById = async (id: number): Promise<Size> => {
  const [data]: Size[] = await db<Size>('sizes').where({ id });
  return data;
}

const storeSize = async (size: SizeDto): Promise<Size> => {
  const [data]: Size[] = await db<Size>('sizes').insert(size).returning('*');
  return data;
}

const updateSize = async (id: number, size: SizeDto): Promise<Size> => {
  const [data]: Size[] = await db<Size>('sizes').where({ id }).update(size).returning('*');
  return data;
}

const deleteSize = async (id: number): Promise<Size> => {
  const [data]: Size[] = await db<Size>('sizes').where({ id }).del().returning('*');
  return data;
}

export {
  getAllSizes,
  getSizeById,
  storeSize,
  updateSize,
  deleteSize
}