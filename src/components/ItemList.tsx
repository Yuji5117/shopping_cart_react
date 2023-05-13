import { UseQueryResult } from "react-query";

import { ContentCard } from "@/components/Elements/Card";
import { Item } from "@/types";

type ItemListProps = {
  query: UseQueryResult<Item[], unknown>;
};

export const ItemList = ({ query }: ItemListProps) => {
  if (query.isLoading) return <div>Loading ...</div>;

  return (
    <>
      {!query.data?.length ? (
        <div>該当の商品がありません</div>
      ) : (
        query.data?.map((item) => {
          return (
            <div key={item.id}>
              <ContentCard
                sourceUrl={item.sourceUrl}
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })
      )}
    </>
  );
};
