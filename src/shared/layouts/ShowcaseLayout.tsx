import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LogoImage from "../../assets/image-1@2x.png";

export function ShowcaseLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background-default-default">
      <Header logoSrc={LogoImage} logoAlt="Logo" logoLinkTo="/" showAuth={false} />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
