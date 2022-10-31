export interface CardDataModel {
  title: string;
  section: string;
  imageUrl: string;
  description: string;
  created_date: string;
  updated_date: string;
  published_date: string;

}

export function emptyCardData(): CardDataModel {
  return {
    title: '',
    section: '',
    imageUrl: '',
    description: '',
    created_date: '',
    updated_date: '',
    published_date: '',
  }

}
