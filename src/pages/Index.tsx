import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Calendar",
      title: "Ежедневный учёт энергии",
      description: "Оценка дня по шкале от 1 до 5 с текстовыми заметками"
    },
    {
      icon: "CalendarDays",
      title: "Календарь энергии",
      description: "Визуальное отображение всех записей с цветовой индикацией"
    },
    {
      icon: "Edit3",
      title: "Редактирование записей",
      description: "Изменяйте оценки и заметки с полной историей изменений"
    },
    {
      icon: "BarChart3",
      title: "Аналитика и визуализация",
      description: "Графики, статистика и тренды вашей энергии"
    },
    {
      icon: "Filter",
      title: "Фильтрация и группировка",
      description: "Просмотр по неделям, месяцам и категориям дней"
    },
    {
      icon: "Users",
      title: "Многопользовательская система",
      description: "Безопасная авторизация с изоляцией данных"
    }
  ];

  const benefits = [
    { icon: "Zap", text: "Заполнение занимает 30 секунд в день" },
    { icon: "Eye", text: "Вся информация в одном месте" },
    { icon: "Lock", text: "Данные доступны только владельцу" },
    { icon: "Smartphone", text: "Работает на любом устройстве" },
    { icon: "TrendingUp", text: "Помогает находить связи между событиями" }
  ];

  const audience = [
    "Люди, отслеживающие эмоциональное состояние",
    "Те, кто работает с психологом/терапевтом",
    "Желающие найти паттерны в своём настроении",
    "Контролирующие стресс и выгорание",
    "Практикующие осознанность и самоанализ"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(159,226,191,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                FlowKat
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Выгорание? Не сегодня!
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Персональный трекер энергии и настроения с визуализацией данных. 
                Помогает отслеживать эмоциональное состояние, анализировать паттерны 
                и улучшать качество жизни.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                  Начать использовать
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold px-8">
                  Узнать больше
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10 animate-float">
                <img 
                  src="https://cdn.poehali.dev/files/6a91f618-bfa3-4492-b377-3820902eddad.png" 
                  alt="FlowKat App Screens"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Основные возможности
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Всё необходимое для отслеживания и анализа вашего эмоционального состояния
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                  <Icon name={feature.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Преимущества FlowKat
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Простой и эффективный инструмент для понимания своего эмоционального состояния
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl">
                      <Icon name={benefit.icon} className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-lg pt-2">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className="aspect-square rounded-2xl flex items-center justify-center text-2xl font-bold animate-fade-in hover:scale-110 transition-transform cursor-pointer"
                    style={{
                      backgroundColor: level === 1 ? 'hsl(353, 93%, 70%)' :
                                     level === 2 ? 'hsl(353, 70%, 60%)' :
                                     level === 3 ? 'hsl(204, 96%, 69%)' :
                                     level === 4 ? 'hsl(81, 63%, 52%)' :
                                     'hsl(81, 70%, 40%)',
                      animationDelay: `${level * 0.1}s`
                    }}
                  >
                    {level}
                  </div>
                ))}
              </div>
              <p className="text-center mt-6 text-muted-foreground">
                Шкала энергии: от низкой (1) до отличной (5)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Визуализация энергии
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Наглядные графики помогают отслеживать динамику вашего состояния
          </p>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-semibold mb-6">Недельная статистика</h3>
              <div className="space-y-4">
                {[
                  { day: 'Пн', value: 4, color: 'hsl(81, 63%, 52%)' },
                  { day: 'Вт', value: 3, color: 'hsl(204, 96%, 69%)' },
                  { day: 'Ср', value: 5, color: 'hsl(81, 70%, 40%)' },
                  { day: 'Чт', value: 2, color: 'hsl(353, 70%, 60%)' },
                  { day: 'Пт', value: 4, color: 'hsl(81, 63%, 52%)' },
                  { day: 'Сб', value: 5, color: 'hsl(81, 70%, 40%)' },
                  { day: 'Вс', value: 4, color: 'hsl(81, 63%, 52%)' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="w-8 text-sm font-medium text-muted-foreground">{item.day}</span>
                    <div className="flex-1 h-12 bg-muted/20 rounded-lg overflow-hidden">
                      <div 
                        className="h-full flex items-center justify-end pr-4 font-bold text-lg transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${(item.value / 5) * 100}%`,
                          backgroundColor: item.color,
                          transitionDelay: `${index * 0.1}s`
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 text-center">
                Средний уровень энергии: <span className="text-primary font-semibold">3.9</span>
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-semibold mb-6">Распределение по уровням</h3>
              <div className="space-y-6">
                {[
                  { level: 5, label: 'Отличные дни', count: 3, percent: 43, color: 'hsl(81, 70%, 40%)' },
                  { level: 4, label: 'Хорошие дни', count: 3, percent: 43, color: 'hsl(81, 63%, 52%)' },
                  { level: 3, label: 'Средние дни', count: 1, percent: 14, color: 'hsl(204, 96%, 69%)' },
                  { level: 2, label: 'Сложные дни', count: 1, percent: 14, color: 'hsl(353, 70%, 60%)' },
                  { level: 1, label: 'Тяжёлые дни', count: 0, percent: 0, color: 'hsl(353, 93%, 70%)' },
                ].map((item, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.level}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <span className="text-muted-foreground">{item.count} дней</span>
                    </div>
                    <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${item.percent}%`,
                          backgroundColor: item.color,
                          transitionDelay: `${index * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Для кого это приложение?
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            FlowKat помогает всем, кто заботится о своём эмоциональном здоровье
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {audience.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Check" className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-destructive/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(159,226,191,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(116,209,230,0.15),transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы начать отслеживать свою энергию?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Присоединяйтесь к FlowKat и начните понимать свои эмоциональные паттерны уже сегодня
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-lg"
            >
              Начать бесплатно
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold px-12 py-6 text-lg"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">FlowKat</h3>
              <p className="text-muted-foreground">Выгорание? Не сегодня!</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 FlowKat. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;