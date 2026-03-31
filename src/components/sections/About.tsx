import profilImg from "../../assets/images/profil.jpg";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Hakkımda
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Yazılım geliştirme yolculuğum
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <figure className="flex-shrink-0">
            <img
              src={profilImg}
              alt="Profil fotoğrafı"
              width="192"
              height="192"
              className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
          </figure>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Merhaba! Ben bir web geliştiriciyim ve modern web teknolojileri ile
              kullanıcı dostu uygulamalar geliştiriyorum. React, TypeScript ve
              Tailwind CSS ile performanslı ve erişilebilir arayüzler oluşturuyorum.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Açık kaynak projelere katkıda bulunmayı, yeni teknolojileri öğrenmeyi
              ve toplulukla bilgi paylaşmayı seviyorum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
