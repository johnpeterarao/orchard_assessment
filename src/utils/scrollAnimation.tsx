import gsap from "gsap";

export const triggerAnimation = () => {
    if (window.innerWidth <= 1024) return;

    const leftXValues = [-250, -450, -200];
    const rightXValues = [250, 450, 200];
    const centerYValues = [-100, -50, -50];
    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];
    const yValues = [100, -150, -400];
    const rows = gsap.utils.toArray('.grid__row') as HTMLDivElement[];
   

    rows.forEach((row, index: number) => {
      const leftColumn = row.querySelector('.grid__images--cover') as HTMLElement;
      const rightColumn = row.querySelector('.grid__content') as HTMLElement;
      const centerColumn = row.querySelector('.grid__images--items') as HTMLElement;

      gsap.to(leftColumn, {
        x: leftXValues[index],
        scrollTrigger: {
          trigger: ".grid__section",
          start: "top 0",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            leftColumn.style.transform = `translate(${progress * leftXValues[index]}px, ${progress * yValues[index]}) rotate(${progress * leftRotationValues[index]}deg)`;
            leftColumn.style.opacity = `${1 - (progress * 0.75)}`
          }
        }
      });

      gsap.to(rightColumn, {
        x: rightXValues[index],
        scrollTrigger: {
          trigger: ".grid__section",
          start: "top 0",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            rightColumn.style.transform = `translate(${progress * rightXValues[index]}px, ${progress * yValues[index]}) rotate(${progress * rightRotationValues[index]}deg)`;
            rightColumn.style.opacity = `${1 - (progress * 0.75)}`
          }
        }
      });

      gsap.to(centerColumn, {
        y: centerYValues[index],
        scrollTrigger: {
          trigger: ".grid__section",
          start: "top 0",
          end: "150% bottom",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            centerColumn.style.transform = `translateY(${progress * yValues[index]})`
            centerColumn.style.opacity = `${1 - (progress * 0.75)}`
          }
        }
      });

    })
    
    const productRow = gsap.utils.toArray('.product__section') as HTMLDivElement[];

    
    productRow.forEach((row) => {
        const cards = row.querySelectorAll('.col') as NodeListOf<HTMLElement>;

        cards.forEach((card, cardIndex) => {
            const yValues = [300, 250, 200]; 

            card.style.opacity = `0`;
            
            gsap.from(card, {
                y: 0,        
                duration: 1,    
                delay: cardIndex * 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: row,  
                    start: "top bottom", 
                    end: "bottom bottom", 
                    scrub: true,  
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const progressPercentage = (progress * 100);
                        const totalPX = yValues[cardIndex];
                        const scrolledPX = (progressPercentage / 100) * totalPX;
                        const totalPxs = totalPX - scrolledPX;
                        
                        // See comment 12

                        card.style.transform = `translateY(-${ totalPxs < 0 ? 0 : totalPxs}px)`;
                        card.style.opacity = `${self.progress}`
                    }
                }
            });
        });
    });
}