import { from } from 'rxjs';

export const fetchObservable = (url) => {
  return from(
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        return res.json();
      })
  );
};
