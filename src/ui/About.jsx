import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h3>About our Application</h3>

      <div className={styles.text}>
        <p>
          Welcome to <span>FocusFlow</span> — where chaos meets calm. We
          understand that life can be overwhelming. Tasks pile up, deadlines
          loom, and it often feels like you’re juggling a million things at
          once. That's where we come in. At FocusFlow, we believe managing your
          tasks shouldn’t feel like a second full-time job. Instead of adding
          stress, we’re here to help you simplify, stay on track, and—most
          importantly—find balance. Our mission is clear: to empower you to
          organize your ideas, goals, and responsibilities in a way that feels
          natural, flexible, and, dare we say, fun. Whether you're working on a
          huge project at work, managing personal commitments, or just trying to
          remember to buy groceries, we’ve got the tools to help you keep
          everything in order. We believe that productivity shouldn’t come at
          the expense of your mental well-being. With FocusFlow, you can achieve
          more without the burnout.
        </p>

        <p>
          But it's not just about crossing off to-do lists or hitting
          milestones. It’s about creating lasting habits, smashing your goals,
          and carving out time for what really matters to you. Whether it's
          pursuing your passion, spending time with loved ones, or simply taking
          a moment to relax, we want to help you create space for the things
          that truly enrich your life. At FocusFlow, we give you the structure
          to thrive, but leave the flexibility for you to make it your own. Your
          journey is unique, and so are the tools you need to succeed. We’re
          here to support you, every step of the way. Let’s turn your plans into
          progress — without the stress.
        </p>
      </div>

      <img src="./task-related2.webp" alt="taskWise" />
    </div>
  );
}

export default About;
