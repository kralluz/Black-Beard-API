import { ZodType } from 'zod';
import GenericModelSchema from 'src/schemas/baseModel.schema';

type GenericModel = ZodType<typeof GenericModelSchema>;

export default GenericModel;
