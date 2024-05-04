function Footer(props) {
  return (
    <footer className="flex items-center justify-center px-5 h-16 bg-gray-200 flex-shrink-0 mt-auto">
      <span className="text-dark text-opacity-50">
        Copyright © <b>React State Management</b> {new Date().getFullYear()}
      </span>
    </footer>
  );
}

export default Footer;
