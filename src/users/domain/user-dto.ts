export interface UserDto {
  id: string;
  nick: string;
  password: string;
}
export interface CreateUserDto extends Omit<UserDto, "id"> {}
export interface UpdateUserDto extends Partial<CreateUserDto> {}
export interface loginUserDto extends Required<CreateUserDto> {}
