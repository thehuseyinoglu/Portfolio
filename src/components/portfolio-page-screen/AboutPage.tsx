import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="newsletter-item">
        <div className="">
          <section className="name">
            <p>FRONTEND DEVELOPER</p>
          </section>

          <section className="info">
            <p>Günlük Haberler</p>
            <p>25₺</p>
          </section>

          <section className="title">
            <h1>
              <span>BERKAY</span>
              <span>HÜSEYİNOĞLuu</span>
            </h1>
          </section>

          <section className="content">
            <article className="left-side">
              <h2>
                <span>Javascript</span>
                <span>React.js</span>
                <span>Next.js</span>
                <span>Vue.js</span>
              </h2>

              <div>
                <p>
                  Yaşadığım problemleri analiz ederek, net bir şekilde
                  kavrayabilir ve tutarlı çözümler önerebilirim. Yeni
                  teknolojileri araştırarak, denemekten korkmadan, kendi kendime
                  öğrenebilme yeteneğine sahibim. Frontend developer olmamın
                  yanı sıra, UI/UX tasarımlarının ortaya çıkma süreçlerini takip
                  etmeyi de seviyorum
                </p>
                <p>
                  Amacım her zaman temiz, okunabilir, yüksek performanslı ve
                  tasarımsal açıdan Pixel-Perfect projeler geliştirmektir. Takım
                  çalışması içerisinde, sorumluluk bilinciyle, sevdiğim işi
                  yaparak, alanımda gelişmek ve ilerlemek için can atıyorum.
                </p>
              </div>
            </article>
            <article className="right-side">
              <img src="/assets/images/user.jpeg" height={500} alt="Berkay" />
              <p>
                1998 yılında Bursa'da doğan Berkay Hüseyinoğlu hayatına Frontend
                Developer olarak Eskişehir'de devam etmektedir.
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
