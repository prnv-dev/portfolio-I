import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/data/profile";
import styles from "./ProductTable.module.css";

export default function ProductTable() {
  return (
    <div className={styles.table} role="table" aria-label="Products">
      <div className={styles.head} role="row">
        <span role="columnheader">product</span>
        <span role="columnheader">platform</span>
        <span role="columnheader">what it does</span>
        <span role="columnheader" className="sr-only">
          link
        </span>
      </div>
      {PRODUCTS.map((product) => (
        <div key={product.name} className={styles.row} role="row">
          <span role="cell" className={styles.name}>
            {product.name}
          </span>
          <span role="cell" className={styles.platform}>
            {product.platform.toLowerCase()}
          </span>
          <span role="cell" className={styles.summary}>
            {product.summary}
          </span>
          <span role="cell" className={styles.link}>
            {product.url ? (
              <a href={product.url} target="_blank" rel="noreferrer" aria-label={`Open ${product.name}`}>
                <ArrowUpRight size={15} />
              </a>
            ) : null}
          </span>
        </div>
      ))}
    </div>
  );
}
