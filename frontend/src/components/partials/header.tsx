import Link from "next/link";

const Header = () => {
  const navs = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "#intro" },
    { name: "Thể lệ", href: "#overview" },
    { name: "Đơn vị", href: "#organizer" },
    { name: "Hành trình", href: "#lookback" },
    { name: "Liên hệ", href: "/" },
  ];

  return (
    <header>
      <div className="max-w-[75rem] m-auto flex justify-between items-center my-3">
        <Link href={"/"}>
          <div className="logo flex items-center gap-2">
            <img
              src="https://github.com/robocus/robocus.github.io/blob/main/docs/images/logo/logo.png?raw=true"
              className="h-[4rem]"
              alt="logo"
            />

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              className=""
            >
              <defs>
                <linearGradient
                  id="linearGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f2c3fb" />
                  <stop offset="50%" stopColor="#7e92e6" />
                  <stop offset="100%" stopColor="#a6efff" />
                </linearGradient>
              </defs>
              <path
                fill="url(#linearGradient)"
                d="M9.545 2a3.205 3.205 0 0 0-3.152 2.631l-.038.209l-.098.015a3.845 3.845 0 0 0-3.26 3.8v.595c0 .918.38 1.746.992 2.337a4.106 4.106 0 0 0 1.372 7.557l.014.003A3.741 3.741 0 0 0 12 20.507a3.741 3.741 0 0 0 6.625-1.36l.014-.002a4.106 4.106 0 0 0 1.37-7.559c.611-.59.991-1.419.991-2.336v-.595a3.845 3.845 0 0 0-3.26-3.8l-.098-.015l-.038-.209a3.205 3.205 0 0 0-5.606-1.489A3.2 3.2 0 0 0 9.545 2m3.205 13.5V5.205l-.001-.085a1.705 1.705 0 0 1 3.38-.22l.133.734a.75.75 0 0 0 .624.607l.626.097A2.345 2.345 0 0 1 19.5 8.655v.595A1.75 1.75 0 0 1 17.75 11h-.313q.062-.24.063-.5a2 2 0 1 0-2.75 1.855v1.895c0 .69-.56 1.25-1.25 1.25zm3.5-3.145l.036-.016a.75.75 0 0 0 .464.161h1.143a2.607 2.607 0 0 1 .474 5.17l-.503.092a.75.75 0 0 0-.597.578l-.086.397a2.241 2.241 0 0 1-4.431-.478V17h.75a2.75 2.75 0 0 0 2.75-2.75zM11.248 5.12l-.001.085V7.2q0 .035.003.069V8h-.813a2 2 0 1 0-.205 1.5h1.018v8.759a2.241 2.241 0 0 1-4.43.478l-.087-.397a.75.75 0 0 0-.597-.578l-.503-.092a2.606 2.606 0 0 1 .473-5.17H7.25a.5.5 0 0 1 .5.5v.645a2 2 0 1 0 1.5 0V13a2 2 0 0 0-2-2H6.247a1.75 1.75 0 0 1-1.75-1.75v-.595c0-1.157.844-2.141 1.988-2.317l.626-.097a.75.75 0 0 0 .624-.607l.133-.734a1.705 1.705 0 0 1 3.38.22M8.5 8a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1M8 15.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m7.5-5.5a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1"
              />
            </svg>

            <h2 className="text-4xl font-medium">Robocus</h2> */}
          </div>
        </Link>

        <nav className="nav">
          <ul className="flex gap-8">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
