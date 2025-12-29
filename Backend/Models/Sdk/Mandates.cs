/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.6357543Z
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
/// Dati relativi ai mandati
/// </summary>
public class Mandates
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
	/// Identificatore del mandato
	/// </summary>
	/// <remarks>
	/// <para>Codice che identifica il mandato univocamente all'interno di un singolo dealer.</para>
	/// </remarks>
	public string MandateId { get; set; }

	/// <summary>
	/// Mandati Casa Madre
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-09-24</para>
	/// </remarks>
	public Mandates_General? General { get; set; }

	/// <summary>
	/// Parametri relativi ai mandati Casa Madre
	/// </summary>
	/// <remarks>
	/// <para>A partire da: 2020-09-24</para>
	/// </remarks>
	public ICollection<Mandates_Parameters?>? Parameters { get; set; }
}
