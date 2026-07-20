const software = {
  mac: [
    { name: "Keka", category: "ARCHIVER", description: "A lightweight file archiver with support for 7Z, ZIP, TAR, RAR extraction and more.", link: "https://www.keka.io/en/" },
    { name: "Visual Studio Code", category: "CODE EDITOR", description: "A flexible source-code editor with Git, debugging and a large extension ecosystem.", link: "https://code.visualstudio.com/Download" },
    { name: "iTerm2", category: "TERMINAL", description: "A capable open-source terminal replacement built specifically for macOS.", link: "https://iterm2.com/downloads.html" },
    { name: "Cyberduck", category: "FILE TRANSFER", description: "An open-source client for SFTP, FTP and popular cloud storage services.", link: "https://cyberduck.io/download/" },
    { name: "UTM", category: "VIRTUALIZATION", description: "Run virtual machines for Linux, Windows and other systems on Apple hardware.", link: "https://mac.getutm.app/" },
  ],
  linux: [
    { name: "PeaZip", category: "ARCHIVER", description: "A free open-source archive manager supporting over 200 file types.", link: "https://peazip.github.io/peazip-linux.html" },
    { name: "VSCodium", category: "CODE EDITOR", description: "Community-built binaries of the VS Code editor, without Microsoft telemetry.", link: "https://vscodium.com/#install" },
    { name: "Cockpit", category: "SERVER PANEL", description: "A browser-based interface for monitoring and administering Linux servers.", link: "https://cockpit-project.org/running.html" },
    { name: "FileZilla", category: "FILE TRANSFER", description: "A widely used open-source FTP, FTPS and SFTP desktop client.", link: "https://filezilla-project.org/download.php?type=client" },
    { name: "Remmina", category: "REMOTE DESKTOP", description: "A remote desktop client supporting RDP, VNC, SSH and other protocols.", link: "https://remmina.org/how-to-install-remmina/" },
  ],
  windows: [
    { name: "7-Zip", category: "ARCHIVER", description: "A fast open-source archiver with excellent compression and broad format support.", link: "https://www.7-zip.org/" },
    { name: "Visual Studio Code", category: "CODE EDITOR", description: "A flexible source-code editor with Git, debugging and a large extension ecosystem.", link: "https://code.visualstudio.com/Download" },
    { name: "WinSCP", category: "FILE TRANSFER", description: "A trusted free SFTP, FTP, WebDAV and S3 client for Windows.", link: "https://winscp.net/eng/download.php" },
    { name: "Windows Terminal", category: "TERMINAL", description: "Microsoft’s open-source terminal for PowerShell, Command Prompt and WSL.", link: "https://aka.ms/terminal" },
    { name: "XAMPP", category: "LOCAL SERVER", description: "An easy local Apache environment with MariaDB, PHP and Perl included.", link: "https://www.apachefriends.org/download.html" },
  ],
};

const list = document.querySelector("#software-list");
const tabs = [...document.querySelectorAll(".os-tab")];
const navLinks = [...document.querySelectorAll(".nav-link[data-view]")];
const views = [...document.querySelectorAll(".view")];

function renderSoftware(os) {
  list.innerHTML = software[os].map((item, index) => `
    <article class="software-row">
      <span class="row-number">${String(index + 1).padStart(2, "0")}</span>
      <div class="software-copy">
        <span class="category">${item.category}</span>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
      </div>
      <a class="download" href="${item.link}" target="_blank" rel="noreferrer" aria-label="Open the official download page for ${item.name}">DOWNLOAD <span>↘</span></a>
    </article>
  `).join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    renderSoftware(tab.dataset.os);
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navLinks.forEach((item) => item.classList.toggle("active", item === link));
    views.forEach((view) => view.classList.toggle("active-view", view.id === link.dataset.view));
    document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

renderSoftware("mac");
