const fetchProducts = async () => {
  try {
    const response = await fetch('./products.js'); // استدعاء الملف المحلي
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json(); // تحويل البيانات إلى JSON
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// استخدام الدالة لجلب البيانات
fetchProducts()
  .then(products => {
    // استخدام البيانات المسترجعة هنا
    console.log('Products:', products);
  })
  .catch(error => {
    // التعامل مع الأخطاء هنا
    console.error('Error fetching products:', error);
  });
