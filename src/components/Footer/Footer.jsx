function Footer() {

  return (
    <footer className="footer bg-base-200 items-center p-4 font-poppins flex justify-center items-center">
      <aside className="">
        <p>{` © ${new Date().getFullYear()} | by R`}</p>
      </aside>
    </footer>
  );
}

export default Footer;