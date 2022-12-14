import { model, Schema } from "mongoose";
import { IPuntuacionBasica, puntuacionBasica } from "./puntuacionBasica";
import { IPuntuacionCalculable, puntuacionCalculable } from "./puntuacionCalculable";
import {
	IPuntuacionDefensiva,
	puntuacionDefensiva
} from "./puntuacionDefensiva";
import { IPuntuacionFisica, puntuacionFisica } from "./puntuacionFisica";
import { IPuntuacionOfensiva, puntuacionOfensiva } from "./puntuacionOfensiva";
import { IPuntuacionPortero, puntuacionPortero } from "./puntuacionPortero";
import { IPuntuacionPosesion, puntuacionPosesion } from "./puntuacionPosesion";

export const puntuacionJugador = new Schema<IPuntuacionJugador>(
	{
		idJugador: {
			type: String,
			required: true,
			trim: true,
		},
		idPartido: {
			type: String,
			required: true,
			trim: true,
		},
		semana: {
			type: Number,
			required: true,
		},
		puntos: {
			type: Number,
			required: true,
		},
		puntuacionBasica: {
			type: puntuacionBasica,
			required: true,
		},
		puntuacionOfensiva: {
			type: puntuacionOfensiva,
			required: true,
		},
		puntuacionPosesion: {
			type: puntuacionPosesion,
			required: true,
		},
		puntuacionDefensiva: {
			type: puntuacionDefensiva,
			required: true,
		},
		puntuacionFisico: {
			type: puntuacionFisica,
			required: true,
		},
		puntuacionPortero: {
			type: puntuacionPortero,
			required: true,
		},
		puntuacionCalculable: {
			type: puntuacionCalculable,
			required: true,
		},
		idEquipo: {
			type: String,
			required: true,
			trim: true,
		},
		idEquipoRival: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		_id: false,
		versionKey: false,
		timestamps: false,
	}
);

export interface IPuntuacionJugador {
	idJugador: string;
	idPartido: string;
	semana: number;
	puntos: number;
	puntuacionBasica: IPuntuacionBasica;
	puntuacionOfensiva: IPuntuacionOfensiva;
	puntuacionPosesion: IPuntuacionPosesion;
	puntuacionDefensiva: IPuntuacionDefensiva;
	puntuacionFisico: IPuntuacionFisica;
	puntuacionPortero: IPuntuacionPortero;
	puntuacionCalculable: IPuntuacionCalculable;
	idEquipo: string;
	idEquipoRival: string;
}

export const modelPuntuacionJugador = model<IPuntuacionJugador>(
	"puntuacionJugador",
	puntuacionJugador
);
