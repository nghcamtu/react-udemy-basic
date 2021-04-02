//HOC- Higher Order Component, ý chỉ các component bọc ngoài component khác, nên có độ ưu tiên cao hơn 
// HOC bản thân nó không chứa bất kì logic nào (it's doesn't contain it own logic), 
    // cũng không chứa định kiểu (it's own styling) 
    // cũng không thêm bất kì cấu trúc nào vào JSX code hay DOM thật để được render ra
    // nó chỉ đơn giản là 1 cái bọc (wrapper)

//HOC thường dùng để bọc các component chứa các HTTP request, để tự động (automatically) handle error