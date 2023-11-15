/* eslint-disable no-undef */


const Foooter = () => {
  return (
    <footer className="  p-10 bg-black dark:bg-base-200 text-white  dark:text-base-content">
      <div className="max-w-6xl mx-auto footer">
        <aside>
        <a className="btn btn-ghost text-xl text-[#7E90FE]">Career-Hub</a>
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>

  );
};

export default Foooter;