class SearchItemModel {
  constructor(id?: number, title?: string, subtitle?: string, avatar?: string) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.avatar = avatar;
  }

  id?: number;
  title?: string;
  // TODO: для опросников поместить имя и аватар создателя
  subtitle?: string;
  avatar?: string;
}

export default SearchItemModel;
