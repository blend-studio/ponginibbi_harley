/*
 * Copyright © 2019-2025 Websoft.
 * 2025-06-12T09:59:31.7775369Z
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
/// Dati del veicolo
/// </summary>
public class Vehicles
{
	/// <summary>
	/// Identificatore del dealer
	/// </summary>
	/// <remarks>
	/// <para>Codice univoco del dealer. Tipicamente si tratta della partita IVA dell'azienda.</para>
	/// </remarks>
	public string DealerId { get; set; }

	/// <summary>
	/// Numero seriale
	/// </summary>
	/// <remarks>
	/// <para>Identificatore numerico globale dell'elemento. Questo identificatore è univoco anche tra dealer diversi.</para>
	/// </remarks>
	public long SerialNumber { get; set; }

	/// <summary>
	/// Data di ultimo aggiornamento
	/// </summary>
	/// <remarks>
	/// <para>Data e ora dell'ultima volta in cui questo elemento è stato modificato.</para>
	/// </remarks>
	public DateTime? UpdatedAt { get; set; }

	/// <summary>
	/// Identificatore del veicolo
	/// </summary>
	/// <remarks>
	/// <para>Codice che identifica il veicolo univocamente all'interno di un singolo dealer.</para>
	/// </remarks>
	public string Vid { get; set; }

	/// <summary>
	/// Dati relativi al commercio del veicolo
	/// </summary>
	public Vehicles_Business? Business { get; set; }

	/// <summary>
	/// Campagne
	/// </summary>
	public ICollection<Vehicles_Campaigns?>? Campaigns { get; set; }

	/// <summary>
	/// Codici del DMS relativi alle proprietà del veicolo
	/// </summary>
	public Vehicles_Codes? Codes { get; set; }

	/// <summary>
	/// Dati da fonti di da terze parti
	/// </summary>
	public ICollection<Vehicles_External?>? External { get; set; }

	/// <summary>
	/// Immagini del veicolo
	/// </summary>
	public ICollection<Vehicles_Images?>? Images { get; set; }

	/// <summary>
	/// Contenuti multimediali associati al veicolo
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2019-10-25</para>
	/// </remarks>
	public ICollection<Vehicles_Media?>? Media { get; set; }

	/// <summary>
	/// Dati relativi agli optional e agli accessori
	/// </summary>
	public ICollection<Vehicles_Options?>? Options { get; set; }

	/// <summary>
	/// Dati principali riguardanti il veicolo
	/// </summary>
	public Vehicles_Public? Public { get; set; }

	/// <summary>
	/// Dati STD
	/// </summary>
	public ICollection<Vehicles_Std?>? Std { get; set; }

	/// <summary>
	/// Dati riguardanti i veicoli pesanti
	/// </summary>
	public Vehicles_Truck? Truck { get; set; }

	/// <summary>
	/// Dati WLTP
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2021-01-14</para>
	/// </remarks>
	public ICollection<Vehicles_Wltp?>? Wltp { get; set; }
}
