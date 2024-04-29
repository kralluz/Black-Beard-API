import { ZodType } from 'zod';
import GenericModelSchema from '../schemas/baseModel.schema';

type GenericModel = ZodType<typeof GenericModelSchema>;

export default GenericModel;
