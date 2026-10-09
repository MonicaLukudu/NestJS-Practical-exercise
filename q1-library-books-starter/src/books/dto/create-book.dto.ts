import { IsString, IsNumber, IsOptional, IsBoolean, IsArray, isString } from 'class-validator';

// TODO (Task 2): add class-validator / class-transformer decorators
// so that every rule in README.md is enforced.
export class CreateBookDto {
  @IsString()
  title !: string;
  @IsString()
  author !: string;
  @IsString()
  isbn !: string;
  @IsNumber()
  publishedYear!: number;
  @IsArray()
  genres?: string[];
  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
