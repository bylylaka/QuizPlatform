class SearchItemUserModel {
  constructor(id?: number, title?: string, avatar?: string) {
    this.id = id;
    this.title = title;
    this.avatar = avatar;
  }

  id?: number;
  title?: string;
  avatar?: string;
}

export default SearchItemUserModel;
