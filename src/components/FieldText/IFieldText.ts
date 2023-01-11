import { IField } from "../common/IField";

export interface IFieldText extends IField {
    minLength?: number;
    maxLength?: number;
}