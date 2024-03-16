import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>Welcome to the Portfolio of NEO</h1>
    </header>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
        </ul>
    </nav>
    
    <div>
            <div className="artwork">
                <img src="https://img.freepik.com/free-photo/abstract-backdrop-with-multi-colored-decoration-generative-ai_188544-12870.jpg" alt="Artwork 1" />
                <p>Artwork 1</p>
            </div>
            <div className="artwork">
                <img src="https://cdn.pixabay.com/photo/2016/11/19/17/28/art-1840481_1280.jpg" alt="Artwork 2" />
                <p>Artwork 2</p>
            </div>
            <div className="artwork">
                <img src="https://www.millenniumpost.in/h-upload/2023/06/07/704337-paint-palettes-istock-1244865651-1-16a59c0.webp" alt="Artwork 3" />
                <p>Artwork 3</p>
            </div>
        </div>

        <footer>
                <p style={{ textAlign: 'center' }}>&copy; 2024 Artist Name. All rights reserved.</p>
            </footer>
    </main>
  );
}
