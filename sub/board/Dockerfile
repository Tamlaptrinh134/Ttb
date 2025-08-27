# Chọn image PHP có sẵn Apache
FROM php:8.1-apache

# Copy mã nguồn vào thư mục web của Apache
COPY . /var/www/html/

# Mở cổng 80
EXPOSE 80

# Chạy Apache
CMD ["apache2-foreground"]
