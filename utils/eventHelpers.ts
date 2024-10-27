export interface Event {
    title: string;
    start: string;
    end: string;
    location: string;
    instansiPrice: string;
    videoTron: string;
  }

  export function getMarkedDates(events: Event[]) {
    const markedDates: { [key: string]: { marked: boolean; dotColor: string } } = {};

    events.forEach((event) => {
      markedDates[event.start] = { marked: true, dotColor: 'blue' };
    });

    return markedDates;
  }
