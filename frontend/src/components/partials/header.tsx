const Header = () => {
  const navs = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Giới thiệu', href: '/' },
    { name: 'Thể lệ', href: '/' },
    { name: 'Đơn vị', href: '/' },
    { name: 'Hành trình', href: '/' },
    { name: 'Liên hệ', href: '/' },
  ]

  return (
    <header>
      <div className="max-w-[75rem] m-auto flex justify-between items-center">
        
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        
        <nav className="nav">
          <ul className="flex gap-8">
            {navs.map((nav, index) => (
              <li key={index}>
                <a href={nav.href}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;