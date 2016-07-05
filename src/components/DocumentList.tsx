import * as React from 'react';
import { Prismic } from 'prismic.io';

interface LinkResolverFunc {
  (doc: any): string;
}

export interface DocumentListProps {
  docs: Array<any>
}

class DocumentList extends React.Component<DocumentListProps, {}> {
  render() {
    if (this.props.docs.length === 0) {
      return (<div>No result!</div>);
    }
    return (<ul>
      {this.props.docs.map((doc: any) => {
        return (<li key={doc.id}>
          {doc.slug}
        </li>);
      })}
    </ul>);
  }
}

export default DocumentList;