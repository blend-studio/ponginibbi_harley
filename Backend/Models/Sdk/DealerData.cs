/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.5340646Z
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
/// Dati relativi al dealer
/// </summary>
public class DealerData
{
	/// <summary>
	/// Data di creazione
	/// </summary>
	/// <remarks>
	/// <para>Data e ora alla quale questo elemento è stato individuato per la prima volta.</para>
	/// </remarks>
	public DateTime? CreatedAt { get; set; }

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
	/// Campagne attive
	/// </summary>
	public ICollection<DealerData_Campaigns?>? Campaigns { get; set; }

	/// <summary>
	/// Informazioni sul dealer
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-09-24</para>
	/// </remarks>
	public DealerData_DealerInfo? DealerInfo { get; set; }

	/// <summary>
	/// Valori tabellari di campi elenco
	/// </summary>
	public ICollection<DealerData_FieldValues?>? FieldValues { get; set; }

	/// <summary>
	/// Corrispondenza tra i codici del DMS e i codici di Casa Madre
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2022-02-17</para>
	/// </remarks>
	public ICollection<DealerData_Mapping?>? Mapping { get; set; }

	/// <summary>
	/// Impostazioni generali del dealer
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2024-02-14</para>
	/// </remarks>
	public ICollection<DealerData_VenueSettings?>? VenueSettings { get; set; }
}
