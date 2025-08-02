//bootstrap ve index sayfasını içine aktaran sayfa

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/styles.css'; // Template’in ana CSS dosyasının yolu
import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1>Ürünler</h1>
      {/* Buraya Bootstrap template’ten ürün kartlarını ekleyebilirsiniz */}
    </div>
  );
};

export default ProductsPage;