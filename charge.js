// charger_coords.js

// 충전소 좌표 JSON 경로
export const chargerCoordsUrl = './charger_coords.json';

// 좌표 로드 함수
export function loadChargerCoords() {
  return fetch(chargerCoordsUrl)
    .then(res => {
      if (!res.ok) throw new Error(`charger_coords.json 로드 실패 (${res.status})`);
      return res.json();
    });
}
