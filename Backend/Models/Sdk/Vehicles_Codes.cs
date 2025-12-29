/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7800520Z
 * Questo file è stato generato automaticamente.
 */

#nullable enable

#pragma warning disable IDE0079
#pragma warning disable CS8618
#pragma warning disable IDE0005

using System;
using System.Collections.Generic;

namespace PublisherModels;

/// <summary>
/// Codici del DMS relativi alle proprietà del veicolo
/// </summary>
public class Vehicles_Codes
{
	/// <summary>
	/// Effettiva destinazione di vendita
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? ActualSaleTarget { get; set; }

	/// <summary>
	/// Codice del colore esterni
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-11-07</para>
	/// </remarks>
	public string? BodyColor { get; set; }

	/// <summary>
	/// Codice del tipo carrozzeria
	/// </summary>
	public string BodyType { get; set; }

	/// <summary>
	/// Codice marca
	/// </summary>
	/// <remarks>
	/// <para>Codice associato (dal dealer o da casa madre) a questa marca</para>
	/// </remarks>
	public string Brand { get; set; }

	/// <summary>
	/// Codice della sede di competenza
	/// </summary>
	public string DealershipVenue { get; set; }

	/// <summary>
	/// Previsione della destinazione di vendita, dopo il ritiro
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? ExpectedSaleTarget { get; set; }

	/// <summary>
	/// Previsione della destinazione di vendita, prima del ritiro
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? ExpectedSaleTargetBeforePickup { get; set; }

	/// <summary>
	/// Famiglia
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? Family { get; set; }

	/// <summary>
	/// Tipo alimentazione
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-01-06</para>
	/// </remarks>
	public string? FuelType { get; set; }

	/// <summary>
	/// Tipo cambio
	/// </summary>
	/// <remarks>
	/// <para>Valori noti: A, M, S</para>
	/// <para>A partire da: 2023-07-18</para>
	/// </remarks>
	public string? GearType { get; set; }

	/// <summary>
	/// Codice del colore interni
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-11-07</para>
	/// </remarks>
	public string? InteriorsColor { get; set; }

	/// <summary>
	/// Codice per uso interno
	/// </summary>
	/// <remarks>
	/// <para>Si tratta di un codice assegnato al veicolo dal dealer. Il suo eventuale significato è stabilito dal dealer.</para>
	/// </remarks>
	public string? InternalCode { get; set; }

	/// <summary>
	/// Codice della linea
	/// </summary>
	public string Line { get; set; }

	/// <summary>
	/// Categoria della linea del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? LineCategory { get; set; }

	/// <summary>
	/// Sottocategoria della linea del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2023-07-06</para>
	/// </remarks>
	public string? LineSubcategory { get; set; }

	/// <summary>
	/// Codice dell'ubicazione
	/// </summary>
	public string Location { get; set; }

	/// <summary>
	/// Codice assegnato al dealer da casa madre
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-08-07</para>
	/// </remarks>
	public string? MakerDealerCode { get; set; }

	/// <summary>
	/// Codice versione di casa madre
	/// </summary>
	public string? MakerVersionCode { get; set; }

	/// <summary>
	/// Id del mandato
	/// </summary>
	public string? MandateId { get; set; }

	/// <summary>
	/// Codice modello
	/// </summary>
	/// <remarks>
	/// <para>Codice associato (dal dealer o da casa madre) a questo modello</para>
	/// </remarks>
	public string Model { get; set; }

	/// <summary>
	/// Provenienza
	/// </summary>
	public string? Origin { get; set; }

	/// <summary>
	/// Codice del veicolo all'interno del parcheggio aziendale
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2021-02-03</para>
	/// </remarks>
	public string? ParkingLotCode { get; set; }

	/// <summary>
	/// Previsione della destinazione di vendita (dopo il ritiro)
	/// </summary>
	/// <remarks>
	/// <para>Questo campo ha senso soltanto nell'usato e nell'aziendale.</para>
	/// <para>A partire da: 2022-03-31</para>
	/// </remarks>
	[Obsolete("Il significato di questo campo è errato per alcune tipologie di veicolo. Usare i nuovi campi: ActualSaleTarget, ExpectedSaleTarget e ExpectedSaleTargetBeforePickup")]
	public string? SaleTarget { get; set; }

	/// <summary>
	/// Previsione della destinazione di vendita, prima del ritiro
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-03-31</para>
	/// </remarks>
	[Obsolete("Il significato di questo campo è errato per alcune tipologie di veicolo. Usare i nuovi campi: ActualSaleTarget, ExpectedSaleTarget e ExpectedSaleTargetBeforePickup")]
	public string? SaleTargetBeforePickup { get; set; }

	/// <summary>
	/// Segmento
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2025-03-13</para>
	/// </remarks>
	public string? Segment { get; set; }

	/// <summary>
	/// Tipo trazione
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-01-06</para>
	/// </remarks>
	public string? TractionType { get; set; }

	/// <summary>
	/// Marca del veicolo in permuta
	/// </summary>
	/// <remarks>
	/// <para>Se il veicolo è stato ritirato per una permuta, questo campo indica la marca del veicolo venduto a fronte di questo veicolo ritirato.</para>
	/// <para>A partire da: 2022-04-15</para>
	/// </remarks>
	public string? TradeinBrand { get; set; }

	/// <summary>
	/// Tipologia del veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-01-06</para>
	/// </remarks>
	public string? Type { get; set; }

	/// <summary>
	/// Codice della sede legata all'ubicazione
	/// </summary>
	public string Venue { get; set; }

	/// <summary>
	/// Codice versione
	/// </summary>
	/// <remarks>
	/// <para>Codice associato (dal dealer o da casa madre) a questa versione</para>
	/// </remarks>
	public string Version { get; set; }

	/// <summary>
	/// Codice magazzino
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-12-07</para>
	/// </remarks>
	public string? WarehouseCode { get; set; }

	/// <summary>
	/// Codice della garanzia
	/// </summary>
	public string Warranty { get; set; }
}
