/*
 * Copyright © 2019-2025 Websoft.
 * 2025-04-07T09:36:46.5384662Z
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
/// Impostazioni generali del dealer
/// </summary>
/// <remarks>
/// <para>A partire da: 2024-02-14</para>
/// </remarks>
public class DealerData_VenueSettings
{
	/// <summary>
	/// ID impostazione sede
	/// </summary>
	/// <remarks>
	/// <para>Codice univoco dell'impostazione, codice sede.</para>
	/// </remarks>
	public string ItemId { get; set; }

	/// <summary>
	/// Massima durata prenotazione veicolo nuovo
	/// </summary>
	public int NewReservationDaysMax { get; set; }

	/// <summary>
	/// Minima durata prenotazione veicolo nuovo
	/// </summary>
	public int NewReservationDaysMin { get; set; }

	/// <summary>
	/// Massima durata prenotazione veicolo usato
	/// </summary>
	public int UsedReservationDaysMax { get; set; }

	/// <summary>
	/// Minima durata prenotazione veicolo usato
	/// </summary>
	public int UsedReservationDaysMin { get; set; }
}
