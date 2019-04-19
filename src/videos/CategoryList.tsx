import * as React from 'react';
import { Category } from 'src/models/category';
import { CategoryView } from './CategoryView';

interface Props {
  categories: Category[];
}

export class CategoryList extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.categories
          .map(c => ({
            ...c,
            videos: c.videos.filter(v => v.public),
          }))
          .filter(c => c.videos.length > 0)
          .map(c => (
            <CategoryView key={c.name} category={c} />
          ))}
      </div>
    );
  }
}
