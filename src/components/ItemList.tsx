import { ContentCard } from "@/components/Elements/Card";
import { Item } from "@/types";

type ItemListProps = {
  items: Item[] | undefined;
  isLoading: boolean;
};

export const ItemList = ({ items, isLoading }: ItemListProps) => {
  if (isLoading) return <div>Loading ...</div>;

  if (!items?.length) return <div>該当の商品がありません</div>;

  return (
    <>
      {items?.map((item) => (
        <div key={item.id}>
          <ContentCard
            sourceUrl={item.sourceUrl}
            title={item.title}
            description={item.description}
          />
        </div>
      ))}
    </>
  );
};
